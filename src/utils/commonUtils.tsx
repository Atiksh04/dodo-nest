// util to format amount as per display requirement
export function formatAmount(amount: number): string {
  const formatWithSuffix = (value: number, suffix: string) => {
    const formattedValue = (value).toFixed(1);
    return formattedValue.endsWith('.0') ? `${formattedValue.slice(0, -2)}${suffix}` : `${formattedValue}${suffix}`;
  };

  if (amount >= 1_000_000_000) {
    return formatWithSuffix(amount / 1_000_000_000, 'B');
  } else if (amount >= 1_000_000) {
    return formatWithSuffix(amount / 1_000_000, 'M');
  } else if (amount >= 1_000) {
    return formatWithSuffix(amount / 1_000, 'K');
  } else {
    return amount.toString();
  }
}

// util to formart phone number
export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{5})(\d{5})$/);
  if (match) {
      return `${match[1]} ${match[2]}`;
  }
  return phoneNumber;
};