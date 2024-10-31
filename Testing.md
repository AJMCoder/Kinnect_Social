### Manual Testing

- Tested functionality for all resources:
  - Registration/Login
  - Redirecting Users
  - NavBar
  - Home Page
  - Posts
  - Creating/Editing Posts
  - Comments
  - Feed
  - Liked
  - Profile
  - Most Followed
  - Following/Unfollowing
  - Notifications

### Registration 
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **User signup page** | Test link is working | User is directed to the signup page | PASS |
| **User signup - Form validation** | Submit empty form | Form validation prompts the user | PASS |
| **User signup - Form validation** | Submit invalid password | Form validation prompts the user | PASS |
| **User signup - Form validation** | Submit non matching passwords | Form validation prompts the user | PASS |
| **User login page** | Test link is working | User is directed to the login page | PASS |
| **User login - Form validation** | Submit incorrect password | Form validation prompts the user | PASS |
| **User login - Form validation** | Submit incorrect name | Form validation prompts the user | PASS |
| **User Logout page** | Test link is working | User is logged out | PASS |

### Redirect User
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Logged-in User** | Test signin/signup link is disable | User is directed to the home page | PASS |
| **Logged-out User** | Add Post, Feed, Liked and Profiles link is disable | User is directed to the home page | PASS |

### NavBar
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Home Link** | Click on the "Kinnect or Home" link in the navbar | Navigate to the home page | PASS |
| **Authenticated User - Add Post Link** | Click on the "Add Post" link in the navbar | Navigate to the page for adding a new post | PASS |
| **Authenticated User - Feed Link** |  Click on the "Feed" link in the navbar | Navigate to the page for existing content that the user follows | PASS |
| **Authenticated User - Liked Link** |  Click on the "Liked" link in the navbar | Navigate to the page for the favourites content | PASS |
| **Authenticated User - Notification Bell** |  Click on the "Notification Bell" link in the navbar | Displays notifications to user | PASS |
| **Authenticated User - Profile** |  Click on the profile in the navbar | Sends the authenticated user to its profile page | PASS |
| **Unauthenticated User - Signin Link** | Click on the "Sign In" link in the navbar | Navigate to the sign-in page | PASS |
| **Unauthenticated User - Register Link** |  Click on the "Register" link in the navbar | Navigate to the registration page | PASS |

#### Home Page - Post List
| Testing | Steps | Expected Outcome| Results |
| - | - | - | - |
| **Page Navigation** | On the home page | The browser should display the home page with a list of the latest published  posts | PASS |
| **Post Display** | Inspect individual post cards | Each post card should display the featured image, username avatar, publication date, title, description, and number of likes and comments | PASS |
| **Avatar** | Click on the username's avatar | The browser should navigate to the username's profile page | PASS |
| **Infinite Scroll** | Check if seamless browsing by continuously loading content as the user scrolls down the page | New posts are automatically loaded, enabling users to explore an endless stream of content effortlessly | PASS |

#### View Post Page
| Testing | Steps | Expected Outcome | Results |
| - | - | - | - |
| **Access Page** | Navigate to the post page for a specific post | The browser should display detailed information about the post, including title, username's avatar, creation date, image, description, number of likes and comments | PASS |
| **Username Avatar**| Check if username profile information is displayed | The post should include the user's profile image, username, and render the link to the username's profile page | PASS |
| **Like Post** | If logged in, click the like button | The like status should toggle, and the number of likes should be updated | PASS |
| **Unlike Post** | If logged in, click the unlike button | The unlike status should toggle, and the number of likes should be updated | PASS |
| **Like Post (Not Logged In**) | If not logged in | A message should encourage the user to log in, and the like button functionality should be disable | PASS |
| **Like Post (Owner's Post**) | If user tries to like their own content | A message should inform the owner that can not like their own content and the like button functionality is disable | PASS |
| **Add Comment (Valid)** | If logged in, enter a valid comment in the comment form and click "Send" | The comment should be posted, and the number of comments should be updated | PASS |
| **Add Comment (Not Logged In**) | If not logged in | A message should encourage the user to log in, and the comment form should not be displayed | PASS |
| **Delete Comment (Own Comment)** | If logged in and the comment belongs to the user, click the "Three Dots" button on a comment | The comment should be deleted | PASS |
| **Edit Comment (Own Comment)** | If logged in and the comment belongs to the user, click the "Three Dots" button on a comment, make changes, and click "Send" | The comment should be edited | PASS |

#### Create Post
| Testing | Steps | Expected Outcome| Results |
| - | - | - | - |
| **Access Add Post Page** | Navigate to the "Add Post" page by logging in and clicking on the appropriate link  | The browser should display a form for creating a new post | PASS |
| **Form Fields**| Inspect the form fields and labels | The form should include fields for title, content, and an option to upload a featured image | PASS |
| **Publish Post** | Fill in the requireded fields and click on the "Create" button | The form data should be saved, and redirect the user to the post page sucessfully posted | PASS |
| **Edit Post (Authorized)**| Access the "Edit Post" page for a previously saved post | The browser should display a form populated with the existing data of the selected post | PASS |
| **Edit Post (Submit)** | Make changes to the post data and submit the form | The post data should be updated, and redirected to the post page | PASS |
| **Delete Post (Authorized)**| Click the "DropDownMenu" from the specific post page | The browser should display a delete option for the specific post | PASS |
| **Delete Post (Confirm)** | Confirm the deletion of the post | The post should be deleted from the browser| PASS |
|**Navigation** | Click the "cancel" button if the user decides not to create a post | The browser should navigate back to the previous page | PASS |

### Feed List
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Access Page** | Navigate to the "Feed" page | If the user is logged in, the browser should display existing content that the user follows | PASS |
| **Content Display**  | Check if seamless browsing by continuously loading content as the user scrolls down the page | New posts are automatically loaded, enabling users to explore an endless stream of content from the profile users they decided to follow | PASS |

### Liked List
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Access Page** | Navigate to the "Liked" page | Browser displays existing liked content if user is logged in | PASS |
| **Content Display** | Check if loads recent liked content as the user scrolls down the page | Liked posts automatically load, allowing users to explore favorite content | PASS |

### Profile
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Access Page** | Navigate to the "Profile" page | The browser should display a profile for the currently logged in user | PASS |
| **Follow/Unfollown Button** | on the "Profile" page  | A button should appear to follow the user's profile if other user is logged in (If looking at another users profile) | PASS |
| **DropDownProfile** | Click on the three-dots dropdown menu | Dropdown menu should appear with options to "Edit Profile", "Change Username", and "Change Password" | PASS |
| **View Profile Details** |  View number of "Post", "Followers" and "Following" | The browser should display posts associated with the selected user profile | PASS |
| **Edit Profile** | The browser should display profile form fields | Ensure new changes are saved and redirects the user back to the profile page | PASS |
| **Change Username** | The browser should display username form field | Ensure new username is saved and redirects the user back to the profile page | PASS |
| **Change Password** | The browser should display new password form fields | Ensure new password is saved and redirects the user back to the profile page | PASS |

### Most Followed Profiles
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Access Page** |  Navigate to the "Home" page | Browser displays a list of Most Followed profiles with usernames and avatars linking to their respective profile pages, along with a follow/unfollow button if user is logged in | PASS |

### Followers
| Testing  | Steps | Expected Outcome | Results |
| - | - | - | - |
| **Follow/Unfollow Section** | Navigate to the "Profile" page or Most Followed Profile List | The browser should display a follow/unfollow button, if the user is logged in | PASS |
| **Follow User** | Click on the follow button | Follow count increases for the user being followed, and the follower is added to their followers list | PASS |
| **Unfollow User** | Click on the unfollow button | Follow count decreases for the user being unfollowed, and the follower is removed from their followers list | PASS |

### Notification Bell
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Notification Icon** |  Click on the notification icon | A dropdown should appear displaying any notifications such as likes. If no new notifications, users should see "No notifications" | PASS |

#### Additional Information

- All nav links are functional. Links either open in a new window (if there is no navigation on the target page), or new pages provide the option to go back.
- Only an admin / superuser has access to editing and deleting profiles, comments and posts for all users.

I ran some testing through the App.test.js file and created a '__test__' folder within the components folder to house some test for the navbar functionality, signin and sign out functionality and registration. All passed.

The site was tested for responsiveness on the following desktop and mobile devices: Windows PC (Chrome), iPhone 12 Pro Max (Safari).

### Validator Testing

- HTML
  - When passing through the [W3C validator](src/assets/readme/validator/w3c.png) I received only 8 Info Messages on trailing 'slashes'. I have left these in as there is no fundamental effect on the code.
- CSS
  - When passing through the [Jigsaw validator](src/assets/readme/validator/w3c-css.png) I received no warnings in the CSS files.
- JavaScript (ESHint)
  - When passing my code through a [Eslint](src/assets/readme/validator/eshint.png) test I received some errors, mainly to do with props and things missing from its validation. I also received a 'React' must be in scope error in the CurrentUserContent file and the ProfileDataContext file. These do not affect the site functionality so i have left them in for now.

### Lighthouse Testing

![Screenshot of Lighthouse texting results](src/assets/readme/validator/lighthouse.png)

- Performance: The poor performance value is generally and mainly due to the image sizing. My thoughts on this for future would be to use Lazyload to take only load images when they are needed rather than all at once. 
- Accessibility: Relatively good score of 88. Some notes from the test: Buttons do not have an accessible name, Link do not have a discernible name.
- Best Practices: Issue noted: Uses third-party cookies.
- SEO: Score of 100.