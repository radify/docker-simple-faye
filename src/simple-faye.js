import http from 'http';
import Faye from 'faye';

const mount = process.env.FAYE_MOUNT_POINT || '/';
const port  = process.env.FAYE_PORT || 8000;

var server = http.createServer();
var faye   = new Faye.NodeAdapter({mount});

faye.attach(server);
server.listen(port, () => console.info(`Faye server mounted at ${mount} on port ${port}`));
