import LoggerConfig from "../../config/LoggerConfig";
import ELCIELTSInternalError from "../../exception/SportsDayAppInternalError";

function Handle(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    try {
      return await originalMethod.call(this, ...args);
    } catch (err) {
      LoggerConfig.getLogger().error(`Error occured in method name: ${methodName}`, err);
      if (err instanceof ELCIELTSInternalError) {
        throw err;
      } else {
        throw new ELCIELTSInternalError("DB Error Occured");
      }
    }
  };
}

export default Handle;
