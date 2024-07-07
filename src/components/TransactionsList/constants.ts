export type TRANSACTION_TYPE_VALUES = 'Credit' | 'Refund';

export type TRANSACTION_TYPE = {
    id: string;
    time: string;
    type: TRANSACTION_TYPE_VALUES;
    country: string;
}

export const TRANSACTION_DATA: TRANSACTION_TYPE[] = [
    { id: '1', time: '2024-07-01 12:30', type: 'Credit', country: 'United States' },
    { id: '2', time: '2024-07-01 13:00', type: 'Refund', country: 'Canada' },
    { id: '3', time: '2024-07-02 14:00', type: 'Credit', country: 'United Kingdom' },
    { id: '4', time: '2024-07-02 15:30', type: 'Refund', country: 'Germany' },
    { id: '5', time: '2024-07-03 16:00', type: 'Credit', country: 'Australia' },
    { id: '6', time: '2024-07-03 17:00', type: 'Refund', country: 'France' },
    { id: '7', time: '2024-07-04 18:00', type: 'Credit', country: 'Italy' },
    { id: '8', time: '2024-07-04 19:00', type: 'Refund', country: 'Spain' },
    { id: '9', time: '2024-07-05 20:00', type: 'Credit', country: 'Netherlands' },
    { id: '10', time: '2024-07-05 21:00', type: 'Refund', country: 'Belgium' },
    { id: '11', time: '2024-07-06 22:00', type: 'Credit', country: 'Sweden' },
    { id: '12', time: '2024-07-06 23:00', type: 'Refund', country: 'Denmark' },
    { id: '13', time: '2024-07-07 24:00', type: 'Credit', country: 'Norway' },
    { id: '14', time: '2024-07-08 01:00', type: 'Refund', country: 'Finland' },
    { id: '15', time: '2024-07-08 02:00', type: 'Credit', country: 'Switzerland' },
    { id: '16', time: '2024-07-09 03:00', type: 'Refund', country: 'Austria' },
    { id: '17', time: '2024-07-09 04:00', type: 'Credit', country: 'Ireland' },
    { id: '18', time: '2024-07-10 05:00', type: 'Refund', country: 'Portugal' },
    { id: '19', time: '2024-07-10 06:00', type: 'Credit', country: 'Greece' },
    { id: '20', time: '2024-07-11 07:00', type: 'Refund', country: 'Turkey' },
    { id: '21', time: '2024-07-11 08:00', type: 'Credit', country: 'Israel' },
    { id: '22', time: '2024-07-12 09:00', type: 'Refund', country: 'Saudi Arabia' },
    { id: '23', time: '2024-07-12 10:00', type: 'Credit', country: 'United Arab Emirates' },
    { id: '24', time: '2024-07-13 11:00', type: 'Refund', country: 'Qatar' },
    { id: '25', time: '2024-07-13 12:00', type: 'Credit', country: 'South Africa' },
    { id: '26', time: '2024-07-14 13:00', type: 'Refund', country: 'Nigeria' },
    { id: '27', time: '2024-07-14 14:00', type: 'Credit', country: 'Kenya' },
    { id: '28', time: '2024-07-15 15:00', type: 'Refund', country: 'Egypt' },
    { id: '29', time: '2024-07-15 16:00', type: 'Credit', country: 'Argentina' },
    { id: '30', time: '2024-07-16 17:00', type: 'Refund', country: 'Brazil' },
];
