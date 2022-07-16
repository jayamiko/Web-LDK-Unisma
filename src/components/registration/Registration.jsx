import React, {useRef} from 'react';

function RegistrationPage() {
  // https://script.google.com/macros/s/AKfycbwd088jL6QiGEUuwIv1cb6T6B9WXiiv4H_clxU3_LoREO5RZcveDUgdOeyPKKdAfr_E/exec
  const formRef = useRef(null)
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwjWcdOwv0vV4P8u-0aUvgdEXnAaz4Ws9kdw4nyErtZJNKFwSHbWeKBjXUULkYwfbnW/exec'

  const handleSubmit = e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(formRef.current)})
      .then(response => {
        console.log("Successfully")
        e.target.value = ''
      })
      .catch(error => console.error('Error!', error.message))
  }

  return (
      <div className="h-screen flex">
      FORM
        <form name="submit-to-google-sheet" method="post" ref={formRef} onSubmit={handleSubmit}>
          <input id="email" name="email" type="email" placeholder="Email" required />
          <input id="name" name="name" type="text" placeholder="name" required />
          <input id="address" name="address" type="text" placeholder="address" required />
          <button type="submit">Send</button>
        </form>
      </div>
  );
}

export default RegistrationPage;