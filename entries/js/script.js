$(document).ready(function() {
	// text formatting
	$('#paragraph').on('click', function() {
		$('#entryText').selection('insert', {text:'<p>', mode: 'before'}).selection('insert', {text: '</p>', mode: 'after'});
        $('#entryText').focus();
	});

	$('#bold').on('click', function() {
		$('#entryText').selection('insert', {text:'<strong>', mode: 'before'}).selection('insert', {text: '</strong>', mode: 'after'});
        $('#entryText').focus();
	});

	$('#italic').on('click', function() {
		$('#entryText').selection('insert', {text:'<em>', mode: 'before'}).selection('insert', {text: '</em>', mode: 'after'});
        $('#entryText').focus();
	});

	$('#insert-link').on('click', function() {
		var link = $('#link').val();
		$('#entryText').selection('insert', {text:'<a href="' + link + '" target="_blank">', mode: 'before'}).selection('insert', {text: '</a>', mode: 'after'});
		$('#link').val("");
        $('#entryText').focus();
	});

	// save entry
	$('form').submit(function(event) {
		event.preventDefault();
		var Entry = Parse.Object.extend("Entry");

		var entry = new Entry();

		var entryTopics = $('input[type="radio"]:checked').val();
		// var entryTopics = [];
		// var checkboxes = $('input[type="checkbox"]:checked');
		// for (var i = 0; i < checkboxes.length; i++) {
		// 	entryTopics.push(checkboxes[i].value);
		// }

		entry.save({
			subject: event.currentTarget.subject.value,
			author: event.currentTarget.author.value,
			media: event.currentTarget.media.value,
			credit: event.currentTarget.credit.value,
			topic: entryTopics,
			pullquote: event.currentTarget.pullquote.value,
			entryText: event.currentTarget.entryText.value
		}, {
			success: function(entry) {
				$('form').find('input[type="text"], textarea').val("");
				// $('form').find('input[type="checkbox"]').removeAttr("checked");
				$('form').find('input[type="radio"]').removeAttr("checked");
				$('form').prepend('<p class="bg-success">Saved</p>');
			},
			error: function(entry, error) {

			}
		});
	});

});