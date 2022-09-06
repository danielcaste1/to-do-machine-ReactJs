import React, { Fragment } from "react";
import { withStorageListener } from "../ChangeAlert/withStorageListener";

function ChangeAlertCard({ toggleShow }) {
  return (
    <Fragment>
      <p className="card__info">
        Hmmm... It looks like your To Do List changed recently, would you like
        to refresh your list to get the last changes?
      </p>
      <div className="card__footer">
        <button
          className="btn btn-primary"
          onClick={() => {
            toggleShow();
          }}
        >
          Refresh
        </button>
      </div>
    </Fragment>
  );
}

const ChangeAlertCardWithStorageListener = withStorageListener(ChangeAlertCard);

export { ChangeAlertCardWithStorageListener };
