// Q4: Custom Form Builder (Forms + Classes)

class FormBuilder {
    constructor(fields, containerId, outputId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
        this.output = document.getElementById(outputId);
        this.render();
    }

    render() {
        const fieldMarkup = this.fields.map((field, index) => {
            const id = `field-${index}`;
            const required = field.required === false ? "" : "required";
            if (field.type === "select") {
                const options = (field.options || []).map(option =>
                    `<option value="${this.escapeHtml(option)}">${this.escapeHtml(option)}</option>`
                ).join("");
                return `<label for="${id}">${this.escapeHtml(field.label)}
                    <select id="${id}" name="${this.escapeHtml(field.name)}" ${required}>${options}</select>
                </label>`;
            }
            return `<label for="${id}">${this.escapeHtml(field.label)}
                <input id="${id}" name="${this.escapeHtml(field.name)}" type="${this.escapeHtml(field.type || "text")}" ${required}>
            </label>`;
        }).join("");

        this.container.innerHTML = `<form id="generatedForm">${fieldMarkup}<button type="submit">Submit</button></form>`;
        document.getElementById("generatedForm").addEventListener("submit", event => {
            event.preventDefault();
            this.output.textContent = JSON.stringify(this.getFormData(), null, 2);
        });
    }

    getFormData() {
        const data = {};
        this.fields.forEach((field, index) => {
            const element = document.getElementById(`field-${index}`);
            data[field.name] = element.value;
        });
        return data;
    }

    escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[character]);
    }
}

const formFields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" },
    { type: "select", label: "Role", name: "role", options: ["Student", "Teacher", "Admin"] }
];

new FormBuilder(formFields, "formContainer", "output");
