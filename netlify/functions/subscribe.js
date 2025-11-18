/**
 * Netlify serverless function to handle Flodesk subscriber creation
 * This function acts as a secure proxy to the Flodesk API, keeping the API key server-side
 */

const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body
    const { name, email } = JSON.parse(event.body);

    // Validate input
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and email are required' }),
      };
    }

    if (!email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email address' }),
      };
    }

    // Get Flodesk API credentials from environment variables
    const flodeskKey = process.env.VITE_FLODESK_API_KEY;
    const segmentId = process.env.VITE_FLODESK_SEGMENT_ID;

    if (!flodeskKey) {
      console.error('Flodesk API key is not configured');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    console.log('Adding subscriber to Flodesk...');

    // Make request to Flodesk API
    const response = await fetch('https://api.flodesk.com/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(flodeskKey + ':').toString('base64')}`,
      },
      body: JSON.stringify({
        email: email,
        first_name: name,
        ...(segmentId && { segment_ids: [segmentId] }),
      }),
    });

    const data = await response.json();
    console.log('Flodesk Response:', response.status, data);

    if (!response.ok) {
      console.error('Flodesk API Error:', {
        status: response.status,
        statusText: response.statusText,
        data: data
      });

      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: 'Failed to subscribe: ' + (data.message || data.error || 'Please try again')
        }),
      };
    }

    // Success
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Subscriber added successfully'
      }),
    };

  } catch (error) {
    console.error('Subscription error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || 'An error occurred while processing your request'
      }),
    };
  }
};

module.exports = { handler };
