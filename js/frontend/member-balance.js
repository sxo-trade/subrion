$(function()
{
	$('#js-add-funds').on('click', function()
	{
		var amount = prompt(_f('howmuch_funds'));
		if (amount)
		{
			$.getJSON(intelli.config.ia_url + 'profile/balance.json', {amount: amount} , function(response)
			{
				if (typeof response.error == 'undefined')
				{
					return;
				}
				if (false === response.error)
				{
					window.location = response.url;
				}
				else
				{
					intelli.notifBox({msg: response.error, type: 'error'});
				}
			});
		}
	});
});