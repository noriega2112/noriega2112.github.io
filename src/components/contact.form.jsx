import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mknvlaqa"
        method="POST"
      >
        <div className="contact sm:max-w-4xl mx-auto">
            <div className="xl:inp">
                <label>Email:</label> <br/>
                <input type="email" name="email" placeholder="ejemplo@ejemplo.com" className="envio shadow-md" />
            </div>
            <div className="xl:inp">
                <label>Mensaje:</label><br/>
                <textarea name="message" cols="23" rows="10"className="envio shadow-md" placeholder="Mensaje"></textarea>
            </div>
        {status === "SUCCESS" ? <p>Gracias!</p> : <button className="btn contactar sm:contactar2">Contactar</button>}
        {status === "ERROR" && <p>Ooops! Hubo un error.</p>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}