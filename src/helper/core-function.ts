import { ResponseModel } from "src/models/custom/common.response.model";

export function lcfirst(str) {
    str += '';
    const f = str.charAt(0).toLowerCase();
    return f + str.substr(1);
}
  
export function errorResponse(
    msg?: string,
    data?: object,
    code?: number,
    messages?: string[],
  ): ResponseModel {
    return {
      success: false,
      message:
        msg || ('Something went wrong. Please try again after some time.'),
      messages: messages ?? [],
      data: data || null,
      code: code || 500,
    };
}
  