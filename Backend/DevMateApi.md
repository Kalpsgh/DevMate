DevMate APIs

# Auth Router
## POST /signup
1. Get user data from req.body.

2. Validate signup data.

3. Hash the password using bcrypt.

4. Create User document.

5. Save user to database.

6. Generate JWT.

7. Store JWT in cookie.

8. Send response.

## POST /login
1. Get email and password from req.body.

2. Validate login data.

3. Find user by email.

4. Compare password using bcrypt.

5. Generate JWT.

6. Store JWT in cookie.

7. Send response.

## POST /logout
1. Get request from logged-in user.

2. Clear JWT cookie.

3. Send response.

# Profile Router
## GET /profile/view
1. userAuth verifies JWT.

2. Logged-in user is stored in req.user.

3. Read req.user.

4. Send user profile.

## PATCH /profile/edit
1. userAuth verifies JWT.

2. Get logged-in user from req.user.

3. Get updated data from req.body.

4. Validate editable fields.

5. Update user fields.

6. Save document.

7. Send response.

## PATCH /profile/password
1. userAuth verifies JWT.

2. Get oldPassword and newPassword from req.body.

3. Compare oldPassword with stored password.

4. If password is incorrect, return error.

5. Hash newPassword.

6. Update password.

7. Save document.

8. Send response.

# Connection Request Router

## POST /request/send/:status/:userId
1. Get status and userId from req.params.

2. Get logged-in user from req.user._id.

3. Validate status.

4. Validate userId.

5. Check if user exists.

6. Prevent self request.

7. Check duplicate request using $or.

8. Create ConnectionRequest document.

9. Save document.

10. Send response.

## POST /request/review/:status/:requestId

1. Get status and requestId from req.params.

2. Get logged-in user from req.user._id.

3. Validate status.

4. Validate requestId.

5. Find ConnectionRequest using:
   - _id = requestId
   - toUserId = req.user._id
   - status = "interested"

6. If request not found, return error.

7. Update status.

8. Save document.

9. Send response.

# User Router

## GET /user/request/received
1. Get logged-in user from req.user._id.

2. Find ConnectionRequests where:
   - toUserId = logged-in user
   - status = "interested"

3. Populate fromUserId.

4. Send response.


## GET /user/connections
1. Get logged-in user from req.user._id.

2. Find ConnectionRequests where:
   - status = "accepted"
   - logged-in user is sender or receiver.

3. Populate fromUserId and toUserId.

4. Map and return the other user's profile.

5. Send response.


## GET /feed
1. Get logged-in user from req.user._id.

2. Get page and limit from query.

3. Calculate skip.

4. Find all ConnectionRequests where logged-in user is sender or receiver.

5. Store fromUserId and toUserId in a Set.

6. Find Users where:
   - _id is NOT IN Set.
   - _id is NOT logged-in user.

7. Select required fields.

8. Apply skip and limit.

9. Send response.