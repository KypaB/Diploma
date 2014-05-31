#pragma strict
var Player : GameObject;
var Health = 100;
var Expgained : float = 0f;
var quit = false;



function Update()
{
		if (Health <= 0)
	{
		Dead();
	}
}

function ApplyDamage(TheDamage : int)
{
	Health -= TheDamage ;
	animation.Play("gethit");
	
}

function Dead()
{

	AIenemy.moveSpeed = 0.0;
	AIenemy.TheDamage = 0.0;
	animation.Play("die");
	OneTime();
	yield WaitForSeconds(2.5);
	Destroy (gameObject);
	AIenemy.moveSpeed = 5.0;
	AIenemy.TheDamage = 10;
}

function ExpUp () {

   var exp = Player.GetComponent(LevelAndExperience);
        exp.CurrentExp += Expgained;
 }
 
 function OneTime() {
    if(quit) {
       return;
    } 
    quit = true;
    ExpUp();
}