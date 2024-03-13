class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
      this.initForm();
    }
    this.sendForm = this.sendForm.bind(this);
    // Remova a linha abaixo
    // this.onFormInput = this.onFormInput.bind(this);
  }

  initForm() {
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach(field => {
      // Use uma função de flecha para garantir o contexto de 'this'
      field.addEventListener("input", () => this.onFormInput());
    });
    this.updateSubmitButton();
  }

  onFormInput() {
    this.updateSubmitButton();
  }

  updateSubmitButton() {
    const isFormValid = this.isFormValid();
    this.formButton.disabled = !isFormValid;
  }

  isFormValid() {
    const fields = this.form.querySelectorAll("[name]");
    for (const field of fields) {
      if (!field.value) {
        return false;
      }
    }
    return true;
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach(field => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      const response = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });

      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.status);
      }

      this.displaySuccess();
    } catch (error) {
      console.error("Erro:", error);
      this.displayError();
    }
  }


  init() {
    if (this.form) {
      this.formButton.disabled = true; // Desabilita o botão no início
      this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
    return false;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();
