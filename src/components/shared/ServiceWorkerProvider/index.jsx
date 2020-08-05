import { Component } from "react";
import * as serviceWorker from "serviceWorker";

class ServiceWorkerProvider extends Component {
  componentDidMount() {
    serviceWorker.register({ onUpdate: this.onUpdate });
  }

  onUpdate = registration => {
    if (registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  };

  render() {
    return null;
  }
}

export default ServiceWorkerProvider;
