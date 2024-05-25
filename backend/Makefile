.PHONY: help initialise-backend build-docker remove-data clean-docker start-backend

help: 
	@echo "Usage: make [TARGET]"
	@echo "Targets:"
	@echo "  initialise-backend  Installs the required packages and creates the virtual environment"
	@echo "  build-docker        Stubs the vendor data and builds the container"
	@echo "  remove-data         Removes all the current mongodb data"
	@echo "  clean-docker        Stops the container and removes the data (if the user wants to)"
	@echo "  start-backend       Starts the backend"

# Installs the required packages and creates the virtual environment
initialise-backend:
	@echo "Building backend..."
	@which docker > /dev/null || (echo "Docker is not installed"; exit 1)
	@which docker-compose > /dev/null || (echo "Docker Compose is not installed"; exit 1)
	@echo "Building docker image..."
	@docker compose up --build -d
	@which python3 > /dev/null || (echo "Python3 is not installed"; exit 1)
	@python3 -m venv venv
	@echo "Virtual Env created"
	@source venv/bin/activate && pip install -r requirements.txt
	@echo "Requirements installed"
	@echo "Backend built successfully"

# Stubs the vendor data and builds the container
build-docker:
	@docker compose up --build -d

# Removes all the current mongodb data
remove-data:
	@while true; do \
	    read -p "Do you want to remove all data? (y/N): " yn; \
	    case $$yn in \
	        [Yy]* ) rm -rf ./data; echo "Data directory removed."; break;; \
	        [Nn]* ) break;; \
	        * ) echo "Please answer yes (y) or no (n).";; \
	    esac \
	done

# Stops the container and removes the data (if the user wants to)
clean-docker: remove-data
	@docker-compose down -v

# Starts the backend
start-backend:
	@echo "Starting backend..."
	@source venv/bin/activate && python3 main.py


	