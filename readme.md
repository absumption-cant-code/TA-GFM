**1 - You are looking at the documentation for physically manipulating an object. You see methods to apply either a transformation, impulse, or force.**

*How would you expect these 3 to vary behaviorally?*
    ```- When looking at the functionality of the three presented methods, it is clear that the two methods account, impulse and force, are relative to the physics enacted on the object, while the first method, transformation ( transform ) does not
        take physics into account and is instantaneous in its visualization. I'd expect transform to result in an instantaneous change in position or orientation of the object. I'd expect impulse to be a sudden physics-based force applied on the object
        on a specified surface or towards a specified direction with a further specified force. I'd expect the force method to be a constant physics-based movement method.```

*If I fill on the value 10 for the parameters of each one what would happen to the object in each case?*
    ``` - If you were to pass a value of 10 to the parameters of each method, I would expect that in each respective case, a new result would be returned. For the transformation method, I would expect the object to be moved to a position of (10, 10, 10) if the value passed was properly formatted as a Vector and expected as such by the function. I would expect the impulse function to cause a sudden "push" on the object either towards the Vector of (10, 10, 10) or a vector like it, or be "pushed" in a default direction with a force of 10. I would also expect the force method to behave similiarily however, the "push" on the object would remain constant and would not dwindleand would continue to stay in motion, consistent with Newton's Third law of Physics. I'd expect the force to remain constant however, even if enacted upon by an external component. With all of that being said, the outcome of each method is heavily dependent on the engine in this given scenario as well as other factors such as the documented paramters of such methods as well as their expected types.```

**2 - What are the major differences between euler angles, rotation matrices, and quaternions?**
    ``` - Although I have fairily limited experience dealing with quaternions, euler angles, and rotation matrices, I can say that in reference to each other Euler Angles represent a specific orientation or rotation of each axis in a given 3D space when interacting with an object. In my own thinking, Quaternions encompass and can represent Euler Angles. Rotation matrices can be used to find or confirm Euler Angles.```
    
*What are the major performance considerations of each?*
        ``` - Due to my lack of familiarily and experience with concepts such as euler angles, rotation matrices, and quaternions, I can't confidently say what the major performance impacts or considerations would be of each.```

**3 - In your own words explain why a class can implement multiple interfaces, but only extend one class.**
    ``` - Simply put, typescript doesn't support multiple inheritance... yet. Implementing an interface injects its syntax and structure into the respective class, but extending one class from another creates inheritance. ```


**4 - Show an example of an inner join on two tables using MySQL (any version you like)**
    ``` - SELECT playerId FROM players INNER JOIN moderation ON players.playerId = moderation.victimId;```

*How is this different from an outer join?*
    ``` - While an inner join focuses strictly on overlap, an outer join focuses on general combination, having less requirements for what is returned```

**5 - In your opinion, what is the best way to design a tutorial for a game?**
    ``` - In my opinion, game tutorials should be baked into the very nature of the gameplay. They should be simple yet instructive and allow the player to continue to be immersed in their enviroment. Tutorials should include both auditory and visual clues to help push the player in the right direction and shouldn't be overbearing and prevent the player from exploring on their own. The implementation of a tutorial down to the specifics is dependent on each game, however my designs for tutorials tend to be very open, light, and quick without diminensihing on the instructional value and ensuring the player understand the basics of gameplay. And, as always, for the more fast-paced players... they should always... always include a skip button. ```

**7 - In your own words explain the difference between static and instanced class members**
    ``` - Static class members belong to the class itself, while instanced class members belong to the object or the instance.```

**9 - A producer assigns both you and a teammate a design doc with a task you think is impossible. What’s the first thing you do?**
    ``` - In my opinion, there is no tasks that are completely impossible. With that being said, I would begin by breaking down the task into smaller components, and then those components into smaller components. I would destructure the task until I can easily identify where the actual pain-points are. From there I would work with my teammate to brainstorm, design, and develop solutions to the issues found within the smaller components, continiously moving upwards until the task becomes feasible.```

