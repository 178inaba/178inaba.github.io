var progress = {
	bar: $("#test-progress"),
	sr: $("#test-progress span.sr-only"),
	startBtn: $("#btn-start"),
	stopBtn: $("#btn-stop"),
	clearBtn: $("#btn-clear"),
	loadingP: $("#loading"),
	moveID: null,
	loadingID: null,
	loadingDot: 0,
	move: function(moveVal) {
		console.debug("progress.move");

		nowVal = Number($("#test-progress").attr("aria-valuenow"));
		nowVal += moveVal;

		this.bar.css("width", nowVal + "%");
		this.bar.attr("aria-valuenow", nowVal);
		this.sr.text(nowVal + "% Complete");

		if (nowVal === 100) {
			this.stop();
		}
	},
	loading: function() {
		console.debug("progress.loading");

		var dot = "";
		for (var i = 0; i < this.loadingDot; i++) {
			dot += ".";
		}

		this.loadingP.text("now loading" + dot);

		this.loadingDot++;
		if (this.loadingDot === 4) {
			this.loadingDot = 0;
		}
	},
	start: function() {
		console.debug("progress.start");

		// button
		this.startBtn.attr("disabled", "disabled");
		this.clearBtn.attr("disabled", "disabled");
		this.stopBtn.removeAttr("disabled");

		this.loadingID = setInterval("progress.loading()", 200);
		this.moveID = setInterval("progress.move(1)", 200);
	},
	stop: function() {
		console.debug("progress.stop");

		clearInterval(this.loadingID);
		clearInterval(this.moveID);
		this.loadingP.text("stop");

		// button
		this.stopBtn.attr("disabled", "disabled");
		this.startBtn.removeAttr("disabled");
		this.clearBtn.removeAttr("disabled");
	},
	clear: function() {
		console.debug("progress.clear");

		this.bar.css("width", "0%");
		this.bar.attr("aria-valuenow", 0);
		this.sr.text("0% Complete");
		this.loadingP.text("");
	}
};
