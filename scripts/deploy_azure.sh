read -p "Reminder: Join the VPN (enter to continue)"
cd ..
docker build . -t smartcitiesdata/discovery_ui_hercules:latest
docker push smartcitiesdata/discovery_ui_hercules:latest
helm uninstall discovery_ui -n urban-os
helm install discovery_ui ./chart -n urban-os