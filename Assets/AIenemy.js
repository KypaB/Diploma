var Distance;
var Target : Transform;
var LookAtDistance = 25.0;
var chaseRange = 15.0;
var attackRange = 1.5;
static var moveSpeed = 5.0;
var Damping = 6.0;
var attackReaptTime = 1;
private var attackTime : float;

static var TheDamage = 10;

var controller : CharacterController;
var gravity : float = 20.0;
private var MoveDirection : Vector3 = Vector3.zero;

function Strat ()
{
	attackTime = Time.time;
}
function Update () {
	
	if (RespawnMenu.playerIsDead == false){
		Distance = Vector3.Distance(Target.position , transform.position);
		if ( Distance < LookAtDistance)
		{
			lookAt();
		}
		if ( Distance > LookAtDistance)
		{
			animation.Play("idle");
		}
		
		if (Distance < attackRange)
		{
			attack();
		}
		
		else if ( Distance < chaseRange)
		{
			chase ();
			animation["run"].enabled = true;
			animation["run"].weight = 1.0;
		}
	}
}

function lookAt(){
	var rotation = Quaternion.LookRotation(Target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation , Time.deltaTime * Damping);
	
}

function chase (){
	moveDirection = transform.forward;
	moveDirection *= moveSpeed;
	moveDirection.y -= gravity + Time.deltaTime;
	controller.Move(moveDirection * Time.deltaTime);

}

function attack()
{
	if (Time.time > attackTime)
	{
		Target.SendMessage("ApplyDamage",TheDamage);
		Debug.Log("the enemey attack");
		attackTime = Time.time + attackReaptTime;
		animation.Play("attack");
	}
}

function ApplyDamage()
{
	chaseRange += 30 ;
	moveSpeed += 2;
	LookAtDistance += 40;
}