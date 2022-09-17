"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHourStringToMinutes = void 0;
const convertHourStringToMinutes = (hourString) => {
    const [hours, minutes] = hourString.split(':').map(Number);
    const minutesAmount = (hours * 60) + minutes;
    return minutesAmount;
};
exports.convertHourStringToMinutes = convertHourStringToMinutes;
