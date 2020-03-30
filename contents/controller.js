// require database model
const PlaceHolder = require("./placeHolder.model");

/* get all placeHolders */
module.exports.get = async (req, res) => {
  const placeHolders = await PlaceHolder.find({});
  res.json(placeHolders);
};

/* create a placeHolder */
module.exports.addOne = async (req, res) => {
  // create a new placeHolder object
  const _placeHolder = new PlaceHolder({
    ...req.body
  });

  // save new placeHolder to the database then respond with it
  await _placeHolder.save(response => res.json(response));
};

/* get a single placeHolder by id */
module.exports.getOne = async (req, res) => {
  // extract id from request parameters
  const { id: _id } = req.params;

  // find in database
  const _placeHolder = await PlaceHolder.findById(_id);

  // respond with the fetched placeHolder
  res.json(_placeHolder);
};

/* update a placeHolder */
module.exports.updateOne = async (req, res) => {
  // extract id from request parameters
  const { id: _id } = req.params;

  // create the update body
  const updateBody = {
    ...req.body
  };

  // find in database and update with updateBody
  const _updatedPlaceHolder = await PlaceHolder.findByIdAndUpdate(
    _id,
    updateBody
  );

  // respond with the updated placeHolder
  res.json(_updatedPlaceHolder);
};

/* delete a placeHolder */
module.exports.deleteOne = async (req, res) => {
  // extract id from request parameters
  const { id: _id } = req.params;

  // find in database and delete
  const _deletedPlaceHolder = await PlaceHolder.findByIdAndDelete(_id);

  // respond with the deleted placeHolder
  res.json(_deletedPlaceHolder);
};
