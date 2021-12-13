## static keyword is used as a modifier

`class wide variables and functions`

when applied to a function or a variable inside a class , the former becomes a class variable or @classmethod

*   what is the point of class methods or class variables access by static keyword ??
*   less resource usage , you don't have to initialise whole class into a variable to access the simple variable inside
*   no extra memory use for creating an object from the class
*   When declaring any const variable inside class

`called classmethods and class variables in python`


    class SuperHero{

        int speed = 52;
        String girlFriend = 'Jane wilson';

        static void getLatestMission(){

        blah blah blah

        }


        Future<double> getEnergyUsageCalories() async{

        blah blah blah

        var data = await fetch('huge cchuck')

        return data;

        }

    }  
  
  
#### to find the speed , why bother to create whole class with multiple methods ??
  
before static
  
      SuperHero batman = SuperHero();
  
      print(batman.speed)
      print(batman.getLatestMission());
      
      batman has unused method getCalories space wastage
      
  
after static

  
      print(Superhero.speed)
      print(SupeHero.getLatestMission());
  
for using const inside class


      class CircleDraw{

      const Pi = 3.146; // invalid and error message
      static const Pi = 3.146;

      }

  
  
  
  
  
  
