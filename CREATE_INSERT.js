// # RUN in mongo prompt -> load("C:\\Users\\Владислав\\Desktop\\create_entity.js")

// Connect to database
db = connect("localhost:27017/office")

// Create collection "Программист"
db.createCollection("programmers")
// Create collection "Приложения"
db.createCollection("applications")

// Add sample data to "programmers" collection
db.programmers.save({ _id: 1, name: "Jack" })
db.programmers.save({ _id: 2, name: "Mark" })
db.programmers.save({ _id: 3, name: "Ginny" })

// Add sample data to "application" collection
db.applications.save({ _id: 1, title: "Google Chrome", programmer: 1 })
db.applications.save({ _id: 2, title: "Windows Explorer", programmer: 2 })
db.applications.save({ _id: 3, title: "VK App", programmer: 3 })
db.applications.save({ _id: 4, title: "Call Of Duty: Modern Warfare", programmer: 2 })
db.applications.save({ _id: 5, title: "Spotify", programmer: 3 })
db.applications.save({ _id: 6, title: "WinRAR", programmer: 1 })
db.applications.save({ _id: 7, title: "Intellij IDEA", programmer: 2 })
db.applications.save({ _id: 8, title: "Daemon Tools 9.1", programmer: 1 })
db.applications.save({ _id: 9, title: "DB Browser for SQLite", programmer: 3 })


