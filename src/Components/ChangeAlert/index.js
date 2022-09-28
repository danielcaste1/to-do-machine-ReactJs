import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  return null;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
