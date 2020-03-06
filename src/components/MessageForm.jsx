import React from 'react';
import { GiPaperPlane } from "react-icons/gi";

const MessageForm = ({
  handleSubmit,
  handleKeyDown,
  handleChange,
  values,
  errors,
  user
}) => {
  return (
    <form className="message-form-container" onSubmit={handleSubmit}>
      <div className="message-form">
        <div>
          <img className="profil-picture" src={user.photoURL} alt="Profil" />
        </div>
        <textarea
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          name="message"
          value={values.message}
          placeholder="What's about ?"
        />
      </div>

      {errors.message && <p className="error-text">{errors.message}</p>}

      <footer>
        <p>{280 - values.message.length}</p>
        <button type="submit" disabled={values.message.length > 280 || values.message.length === 0}>
          <GiPaperPlane />
        </button>
      </footer>
    </form>
  );
}

export default MessageForm;