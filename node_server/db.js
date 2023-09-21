const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
	"mongodb+srv://admin:xpxRg9DUkNpw0G52@doc-in-the-house.pywlo.mongodb.net/datastore?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

exports.client = client;
