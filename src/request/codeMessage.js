const codeMessage = {
  200: 'The server successfully returned the requested data',
  201: 'Create or modify data successfully',
  202: 'A request has entered the background queue(async task)',
  204: 'Deleted data successfully',
  400: 'There was an error in the request sent, and the did not create or modify the data',
  401: 'The admin does not have permission please try to login again',
  403: 'The admin is authorized but access is forbidden',
  404: 'The requeste sent is for a record that does not exist and the server is operating',
  406: 'the requested format is not available',
  410: 'the requested resource has been permanantly deleted and will no longer be available',
  422: 'when creating an object a validation error occurred',
  500: 'an error occurred in the server please check the server',
  502: 'Gateway Error',
  502: 'The service is unavailable the is temporarily overloaded or maintained',
  504: 'the gateway has timed out',
};
export default codeMessage;
