
function validateModel<T extends object>(
    type: { new(): T ; },
    source: {[key: string]: any}
) : [T, boolean, Array<string>] 
{
  const target = new type();
  type keys = keyof T;

  let isValid = true;
  const validationErrors: Array<string> = [];
  const requiredKeys: Array<string> = [];
  const addedKeys: Array<string> = [];

  Object.entries(target).forEach(([key, value]) => {
    if (value !== null) {
      requiredKeys.push(key);
    }
  });
  
  Object.entries(source).forEach(([key,value]) => {
    if (key in target) {
      target[key as keys] = value as any;
      addedKeys.push(key);
    } else {
      isValid = false;
      validationErrors.push(`Body key ${key} is invalid`);
    }
  });

  requiredKeys.forEach((key) => {
    if (!addedKeys.includes(key)) {
      validationErrors.push(`Body key ${key} is missing`);
      isValid = false;
    }
  });

  return [
    target,
    isValid,
    validationErrors
  ]
}

export default validateModel;
