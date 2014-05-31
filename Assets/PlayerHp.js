#pragma strict

static var  MaxHealth = 100;
static var Health : int;
var timer = 0.0f ;

function Start (){
	Health = MaxHealth;
}
function Update()
{
	if (Health <= 0)
	{
		Dead();
	}
	
	if (Health != MaxHealth ){
		timer += Time.deltaTime;
		if (timer > 6.0f)
		{
			if(Health <= 0){
				Health +=0;
			} 
			else 
			{
			Health += 1;
			timer = 0.0f;
			}
		}
	}
}

function ApplyDamage(TheDamage : int)
{
	Health -= TheDamage ;
	if(Health < 0){
		Health = 0;
	}
}

function Dead()
{
	RespawnMenu.playerIsDead = true;
}

function RespawnStats()
{
	Health = MaxHealth;
}

function OnGUI(){
	GUI.Box(Rect(10,10, Screen.width/5, 20 ) , Health + "/" + MaxHealth);
}