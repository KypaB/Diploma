#pragma strict

static var TheDamage: int = 50;
var Distance: float;
var MaxDistance: float=3;
var TheSword: Transform;
var TheMace: Transform;
var keyBoardSound : KeyCode;   

function Update()
{
	if (Input.GetButtonDown("Fire1"))
	{
		var hit : RaycastHit;
		TheSword.animation.Play("Attack");
		TheMace.animation.Play("MaceAttack");
		if(Physics.Raycast (transform.position , transform.TransformDirection(Vector3.forward),hit))
		{
			Distance = hit.distance;
			if (Distance < MaxDistance)
			{
				hit.transform.SendMessage("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
			}
		}
	}
	if(TheSword.animation.isPlaying == false){
		TheSword.animation.CrossFade("Walk");
		}
	 else if (TheMace.animation.IsPlaying == false){
		TheMace.animation.CrossFade("WalkMace");
	}
	  if(Input.GetKeyDown(keyBoardSound))
        {
           audio.Play();
        }
}
