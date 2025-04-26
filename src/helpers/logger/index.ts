/* eslint-disable */

import { getEnvironmentVariables } from "../index";

const { NODE_ENV } = getEnvironmentVariables();

/**
 * Writes a log message with styled background and text color
 */
const write = (
  backgroundColor: string,
  fontColor: string,
  text: unknown,
  ...args: unknown[]
): void => {
  if (NODE_ENV !== "development") {
    return;
  }

  const consoleArgs: string[] = [
    ``,
    `background: ${"#c8c8ff"};`,
    `background: ${"#9696ff"};`,
    `color: ${fontColor}; background: ${backgroundColor};`,
    `background: ${"#9696ff"};`,
    `background: ${"#c8c8ff"};`,
  ];

  const isString: boolean = typeof text === "string";

  !isString && args.unshift(text);

  consoleArgs[0] = `%c %c %c ${isString ? text : "log"} %c %c`;

  if (args.length) {
    console.groupCollapsed(...consoleArgs);

    for (const arg of args) {
      console.log(arg);
    }

    console.groupEnd();
  } else {
    console.log(...consoleArgs);
  }

  return;
};

/**
 * Writes a log message with trace information
 */
const writeTrace = (
  backgroundColor: string,
  fontColor: string,
  text: unknown,
  ...args: unknown[]
): void => {
  if (NODE_ENV !== "development") {
    return;
  }

  const consoleArgs: string[] = [
    ``,
    `background: ${"#c8c8ff"};`,
    `background: ${"#9696ff"};`,
    `color: ${fontColor}; background: ${backgroundColor};`,
    `background: ${"#9696ff"};`,
    `background: ${"#c8c8ff"};`,
  ];

  const isString: boolean = typeof text === "string";

  !isString && args.unshift(text);

  consoleArgs[0] = `%c %c %c ${isString ? text : "log"} %c %c`;

  console.groupCollapsed(...consoleArgs);

  for (const arg of args) {
    console.log(arg);
  }

  console.trace();
  console.groupEnd();

  return;
};

/**
 * Log a notification (blue)
 */
export const logNotification = (...args: unknown[]): void =>
  write("#0000ff", "#ffffff", args.shift(), ...args);

/**
 * Log an API call (gray)
 */
export const logCall = (...args: unknown[]): void =>
  write("#9e9e9e", "#ffffff", args.shift(), ...args);

/**
 * Log an error with stack trace (red)
 */
export const logError = (...args: unknown[]): void =>
  writeTrace("#ff0000", "#ffffff", args.shift(), ...args);

/**
 * Log a rejection/failure (dark red)
 */
export const logReject = (...args: unknown[]): void =>
  write("#8B0000", "#ffffff", args.shift(), ...args);

/**
 * Log a response/success (green)
 */
export const logResponse = (...args: unknown[]): void =>
  write("#308751", "#ffffff", args.shift(), ...args);

/**
 * Log a worker event (orange)
 */
export const logWorkerEvent = (...args: unknown[]): void =>
  write("#FFA500", "#000000", args.shift(), ...args);
