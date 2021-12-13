export function quit(socket) {
    socket.write(`221 Service closing control connection, Bye`);
    socket.end();
    socket.destroy();
}