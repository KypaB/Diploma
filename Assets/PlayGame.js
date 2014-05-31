#pragma strict


var PlayGame = false;
var Options = false;
var Exit = false;
var About = false;

function OnMouseDown()
{
if (PlayGame == true)
	{
		Application.LoadLevel("Game");
	}
		if (Options == true)
	{
		gameObject.Find("Main Camera").transform.position.x = 100;
	}
		if (About ==  true)
	{
		gameObject.Find("Main Camera").transform.position.x = -100;
	}
	if (Exit == true)
	{
		Application.Quit();
	}
}
function OnMouseOver ()
{
	renderer.material.color = Color.red;
}
function OnMouseExit ()
{
	renderer.material.color = Color.white;
}

