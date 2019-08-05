router.post(
    '/register',
    userController.validate('register'),
    userController.register
)