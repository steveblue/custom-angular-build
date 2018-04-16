# custom-angular-build

This is starter code for the Writing A Custom Angular Build workshop at ng-conf 2018.

The workshop is on Fair Day Thursday April 19 from 12 - 2pm in the Murano room.

## Getting Started

1. Clone this repo (`git clone https://github.com/steveblue/custom-angular-build.git`) and run `npm install`
2. Install node > 8.0.0 and < 9.0.0
3. Install Java SE Development Kit 8

To get the most out of this workshop, you must have node and the Java SE Development Kit installed on your machine.

### node > 8.0.0 && < 9.0.0

To get the most out of this workshop, you will need to have node > 8.0.0 and < 9.0.0 installed.

### Java SE Development Kit 8

You will learn how to bundle Angular apps with Closure Compiler in this workshop. Closure Compiler requires the Java JDK to be installed. You can find installs for your machine [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

If you do not have these installed, you can still follow along with the repository and get something out of the workshop. For the best experience possible install these prerequisties prior to the workshop.


## Follow The Slides!

The slides for this workshop are found [here](https://devmagnet.net/slides/custom-angular-build). The slides contain instructions and notes you can use to help you solve code challenges in the workshop.


## CLI Commands

In the workshop we will enable the repo to act as a CLI locally on your machine. This CLI is called `ngs`. You will run the following commands in the workshop to scaffold a new app, then execute the dev and prod builds.

```
ngs --help
ngs scaffold
ngs build dev
ngs build dev --watch
ngs build prod

```

## How Does This Work?

In the workshop there will be code alongs and code challenges where you will be asked to write tasks for the build to complete. You will code portions of the build in the following order.

```
- getting started
- cli
- files
- template
- ngc
- closure compiler
- next
```


## Get Behind In The Workshop?

If you get behind, no worries! I've got ya convered. Stash your changes and then checkout the next branch.

```bash
git stash
git checkout 4/template
```

## Branches

```
master
1/getting-started
2/cli
3/files
4/template
5/ngc
6/closure
```


## Does It Work In Windows?

Yes. I took special care to ensure this workshop will cover cross platform compatibility. Just make sure you have node > 8.0.0 and < 9.0.0 and the Java JDK installed.



