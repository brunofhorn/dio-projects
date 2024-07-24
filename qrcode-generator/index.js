const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const QRCode = require("qrcode");

app.get("/gerar-qrcode", (req, res) => {
	const texto = req.query.texto;

	QRCode.toFile(
		"qrcode.png",
		texto ?? "QRCode Inválido",
		{
			color: {
				dark: "#00F",
				light: "#0000",
			},
		},
		(err) => {
			if (err) {
				console.error("Erro ao gerar QR Code:", err);
				res.status(500).send("Erro ao gerar QR Code");
			} else {
				console.log("QR Code gerado com sucesso!");
				res.sendFile(__dirname + "/qrcode.png");
			}
		}
	);
});

server.listen(3000, () => {
	console.log("Servidor rodando na porta 3000");
});
