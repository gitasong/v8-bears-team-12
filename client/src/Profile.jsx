import React, { useState } from 'react';
import Avatar from 'react-avatar-edit';

function Profile() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [interests, setInterests] = useState([]);
  const [dietRestrictions, setDietRestrictions] = useState('');
  const [dietOptionOther, setDietOptionOther] = useState(false);
  const dietOptions = [
    'Choose one',
    'None - I eat anything & everything!',
    'Vegan',
    'Vegetarian',
    'Gluten Free',
    'Other',
  ];
  const specifyOtherDiet = React.createRef();

  // May use later for the avatar
  // const [preview, setPreview] = useState(null);
  // const [src, setSrc] = useState('');

  function handleDietOption(e) {
    if (e.target.value === 'Other') {
      setDietOptionOther(true);
    }
    setDietRestrictions(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      setPassword('');
      setConfirmPassword('');
    }

    if (dietRestrictions === '' || dietRestrictions === 'Choose one') {
      alert('choose an option for diet restriction');
    }

    if (password === confirmPassword && (dietRestrictions !== '' && dietRestrictions !== 'Choose one')) {
      // alert('changes are successfully saved');

      const userChanges = {
        username,
        firstName,
        lastName,
        email,
        password,
        zipcode,
        interests,
        dietRestrictions,
      };

      console.log('this is userChanges', userChanges);

      setUsername('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setZipcode('');
      setInterests('');
      setDietRestrictions('');
      specifyOtherDiet.current.value = '';
    }
    setDietOptionOther(false);
  }

  return (
    <div>
      <div>
        <Avatar 
          width={390}
          height={295}
        />
      </div>
      <form onSubmit={e => onSubmit(e)}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Confirm password:
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Zipcode:
          <input
            type="text"
            value={zipcode}
            onChange={e => setZipcode(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Interests:
          <input
            type="text"
            value={interests}
            placeholder="Up to 5 separated by commas"
            onChange={e => setInterests(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Diet Restrictions:
          <select
            value={dietRestrictions}
            onChange={e => handleDietOption(e)}
            required
          >
            {dietOptions.map((option, i) => {
              return (
                <option
                  key={i}
                  value={option}
                >
                  {option}
                </option>
              );
            })}
          </select>
        </label>
        <input
          type="text"
          style={{
            display: dietOptionOther ? 'block' : 'none',
          }}
          ref={specifyOtherDiet}
          onChange={e => handleDietOption(e)}
        />
        <br />
        <input
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
}

export default Profile;
