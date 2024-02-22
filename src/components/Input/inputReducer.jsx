export const inputReducer = (state, action) => {
  const empty = action.payload.length === 0;

  switch (action.type) {
    case "NAME":
      const nameRegex = /^[a-zA-Z]+$/;
      const isNameError = !nameRegex.test(action.payload) && !empty;
      return { ...state, value: action.payload, error: isNameError };

    case "SURNAME":
      const surnameRegex = /^[a-zA-Z]+$/;
      const isSurnameError = !surnameRegex.test(action.payload) && !empty;
      return { ...state, value: action.payload, error: isSurnameError };

    case "FISCAL_CODE":
      const uppercaseFiscalCode = action.payload.toUpperCase();
      const fiscalCodeRegex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
      const isFiscalCodeError =
        !fiscalCodeRegex.test(uppercaseFiscalCode) && !empty;

      return { ...state, value: uppercaseFiscalCode, error: isFiscalCodeError };

    case "PHONE":
      const phoneRegex = /^\d{10}$/;
      const isPhoneError = !phoneRegex.test(action.payload) && !empty;
      return { ...state, value: action.payload, error: isPhoneError };

    case "EMAIL":
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isEmailError = !emailRegex.test(action.payload) && !empty;

      return { ...state, value: action.payload, error: isEmailError };

    case "IBAN":
      const ibanRegex = /^[A-Z]{2}\d{2}[A-Z]{4}\d{14}$/;
      const isIbanError = !ibanRegex.test(action.payload) && !empty;
      return { ...state, value: action.payload, error: isIbanError };

    case "NULL":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
