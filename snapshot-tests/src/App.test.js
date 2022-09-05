import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

beforeEach(() => {
fetch.resetMocks()

});



test('renders github snapshot', () => {
const tree = renderer.create(<App/>).toJSON()
expect(tree).toMatchSnapshot()
});

test('Populates the user profile', async () =>{
  const EXPECTED_NAME = null
  const EXPECTED_LOGIN = "TheBackupDrive"
  const EXPECTED_AVATAR = "My avatar url"
  const EXPECTED_REPOS = 35
  
  fetch.mockResponseOnce(JSON.stringify({ 
    name: "",
  avatar_url: "My url",
  login: "TheBackupDrive",
public_repos: "a number",

  }))
// fetch.mockResponseOnce(JSON.stringify({
//   name: EXPECTED_NAME,
//   login: EXPECTED_LOGIN,
//   'avatar_url': EXPECTED_AVATAR,
//   'public_repos': EXPECTED_REPOS,
//   }));
  render(<App />);

  const name = screen.getByTitle("Git Hub Name")
  const avatar = screen.getByTitle("Git Hub Avatar")
  const repos = screen.getByTitle("Repositories")
  
  expect(name).toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
  expect(public_repos).toBeInTheDocument()
})

