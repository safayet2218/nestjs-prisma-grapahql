export function errorObj(message, messages?, code?) {
    return <any>{
      message: message,
      messages: messages ?? [],
      code: code || 500,
    };
  }