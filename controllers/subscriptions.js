// @Description    Get all subscriptions
// @route          GET /api/users/subscriptions
// @access         Public
exports.getSubscriptions = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: 'Show users current preference email@name.com'});  
};

// @Description    Create new subscription
// @route          POST /api/users/subscription
// @access         Private
exports.createSubscriptions = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: 'Create new user subscription'});  
};

// @Description    Create new subscriptions
// @route          POST /api/events/subscriptions
// @access         Private
exports.createSubscriptions = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: 'Create new event subscription'});  
};

// @Description    Delete all subscriptions
// @route          DELETE /api/users/subscriptions
// @access         Private
exports.deleteSubscriptions = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: 'Delete users subscriptions'});  
};