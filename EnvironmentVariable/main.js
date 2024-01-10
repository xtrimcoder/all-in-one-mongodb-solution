
const getEnvironmentVariables = () => {
    try {
      // Get all environment variables
      const environmentVariables = process.env;
  
      // Convert environment variables to a JSON object
      const environmentJson = JSON.stringify(environmentVariables, null, 2);
  
      return environmentJson;
    } catch (error) {
      // console.error('Error getting environment variables:', error.message);
      return null;
    }
  };

  module.exports = getEnvironmentVariables ;