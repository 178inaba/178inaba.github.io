var progress = {
	bar: $("#test-progress"),
	sr: $("#test-progress span.sr-only"),
	clearBtn: $("#btn-clear"),
	intervalID: null,
	move: function(moveVal) {
		console.debug("progress.move");

		now = Number($("#test-progress").attr("aria-valuenow"));
		now += moveVal;

		this.bar.css("width", now + "%");
		this.bar.attr("aria-valuenow", now);
		this.sr.text(now + "% Complete");

		if (now === 100) {
			this.stop();
		}
	},
	start: function() {
		console.debug("progress.start");

		this.clearBtn.attr("disabled", "disabled");
		this.intervalID = setInterval("progress.move(1)", 1000);
	},
	stop: function() {
		console.debug("progress.stop");

		clearInterval(this.intervalID);
		this.clearBtn.removeAttr("disabled");
	},
	clear: function() {
		console.debug("progress.clear");

		this.bar.css("width", "0%");
		this.bar.attr("aria-valuenow", 0);
		this.sr.text("0% Complete");
	}
};
