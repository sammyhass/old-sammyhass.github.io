var jobs = [
	"Lion Tamer",
	"Llama Aprecciator",
	"Professional Lad",
	"Pencil Architect",
	"Flying Unicorn"
]
var _ = document.querySelector.bind(document);
var desc = _("#desc");
var rand;

setInterval(function () {
	rand = Math.floor(Math.random() * jobs.length);
	desc.innerHTML = jobs[rand];
}, 3000);