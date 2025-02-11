﻿#pragma strict

var DoorOpen : AudioClip;
var DoorClose : AudioClip;
var theDoor : Transform;
private var drawGUI = false;
private var doorIsClosed = true;

function Update () {
	if (drawGUI == true && Input.GetKeyDown(KeyCode.E))
	{
		changeDoorState();
	}
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		drawGUI = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		drawGUI = false;
	}
}

function OnGUI ()
{
	if ( drawGUI == true)
	{
	GUI.Box (Rect (Screen.width*0.5-51, 200, 102, 22),"Press E to open ");
	}
}

function changeDoorState()
{
	if(doorIsClosed == true)
	{
		theDoor.animation.CrossFade("Open");
		audio.PlayOneShot(DoorOpen);
		doorIsClosed = false;
		yield WaitForSeconds(3);
		theDoor.animation.CrossFade("Close");
		audio.PlayOneShot(DoorClose);
		doorIsClosed = true;
	}
}