const SubForm = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
      window.open("https://buttondown.com/alexasecureapp", "popupwindow");
   };

   return (
      <form
         action="https://buttondown.com/api/emails/embed-subscribe/alexasecureapp"
         method="post"
         target="popupwindow"
         onSubmit={handleSubmit}
         className="embeddable-buttondown-form text-center p-4 border rounded shadow"
      >
         <div className="mb-3">
            <label htmlFor="bd-email" className="form-label">
               Ingresa tu email
            </label>
            <input
               type="email"
               name="email"
               id="bd-email"
               className="form-control"
               placeholder="you@example.com"
               required
            />
         </div>
         <button type="submit" className="btn btn-primary">
            Suscribirse
         </button>
         <p className="mt-3">
            <a
               href="https://buttondown.com/refer/alexasecureapp"
               target="_blank"
               rel="noopener noreferrer"
               className="text-decoration-none"
            >
               Powered by Buttondown
            </a>
         </p>
      </form>
   );
};

export default SubForm;