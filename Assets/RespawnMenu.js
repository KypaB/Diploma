#pragma strict

var lookAround01 : MouseLook;
var lookAround02 : MouseLook;
var charMotor  : CharacterMotor;
var respawnTransform : Transform;
static var playerIsDead = false;
var quit = false;


function Start () {
	lookAround01 = gameObject.GetComponent(MouseLook);
	lookAround02 = GameObject.Find("MainCamera").GetComponent(MouseLook);
	charMotor = gameObject.GetComponent(CharacterMotor);
}

function Update ()
 {
 	if (playerIsDead == true)
 	{
 		lookAround01.enabled = false;
 		lookAround02.enabled = false;
 		charMotor.enabled = false;
 	 	}

}

function OnGUI ()
{
	if (playerIsDead == true)
	{
		if (GUI.Button(Rect(Screen.width*0.5-50, 240, 100, 40), "Respawn"))
		{
			RespawnPlayer();
 		    playerIsDead = false;
		}
			if (GUI.Button(Rect(Screen.width*0.5-50, 240-40, 100, 40), "Menu"))
		{
			 playerIsDead = false;
			 Application.LoadLevel("MainMenu");
			 LevelAndExperience.CurrentExp = 0.0 ;
   			 LevelAndExperience.CurrentLevel = 0 ;  
   			 PlayerHp.MaxHealth = 100 ;		
		}
	}
}

function RespawnPlayer()
{
	transform.position = respawnTransform.position;
	transform.rotation = respawnTransform.rotation;
	gameObject.SendMessage("RespawnStats");
	lookAround01.enabled = true;
 	lookAround02.enabled = true;
 	charMotor.enabled = true;
	
}