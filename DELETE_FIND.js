// Find programmer
db.programmers.find({ name: "Jack" })

// Delete one row (based on name)
db.applications.deleteMany({ programmer : 1})
db.programmers.deleteOne({ name : "Jack" })

// Delete all rows according to the filter
db.applications.deleteMany({ programmer : 2 })