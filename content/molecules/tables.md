---
title: "Tables"
category: "Molecules"
description: "Data grids for local and remote datasets."
menu:
  main:
    parent: "components-molecules"
---

## Static Table
Visual styles for standard HTML tables.

{{< demo >}}
<div class="table-container">
  <table class="table table--bordered">
    <thead>
      <tr><th>Status</th><th>User</th><th>Actions</th></tr>
    </thead>
    <tbody>
      <tr class="table-row--success">
        <td><span class="badge badge--soft badge--success">Active</span></td>
        <td>Jane Doe</td>
        <td><button class="secondary" >Edit</button></td>
      </tr>
      <tr>
        <td><span class="badge badge--soft badge--neutral">Offline</span></td>
        <td>Bob Smith</td>
        <td><button class="secondary" >Edit</button></td>
      </tr>
    </tbody>
  </table>
</div>
{{< /demo >}}


## League Table
{{< demo >}} 
  <div class="table-container" style="max-height: 500px; overflow-y: auto;">
        <table class="table table--sticky table--fixed-col table--fixed-row table--matrix table-datagrid" data-page-size="7">
          <thead>
            <tr>
              <th data-sort="string" aria-sort="none">Team</th>
              <th data-sort="number" aria-sort="none">P</th>
              <th data-sort="number" aria-sort="none">W</th>
              <th data-sort="number" aria-sort="none">D</th>
              <th data-sort="number" aria-sort="none">L</th>
              <th data-sort="number" aria-sort="none">GF</th>
              <th data-sort="number" aria-sort="none">GA</th>
              <th data-sort="number" aria-sort="none">+/-</th>
              <th data-sort="number" aria-sort="descending">Pts</th>
              <th data-sort="string" aria-sort="none">Form</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">Liverpool</th><td>38</td><td>25</td><td>9</td><td>4</td><td>86</td><td>41</td><td>+45</td><td>84</td><td>W L D L D</td></tr>
            <tr><th scope="row">Arsenal</th><td>38</td><td>20</td><td>14</td><td>4</td><td>69</td><td>34</td><td>+35</td><td>74</td><td>D L D W W</td></tr>
            <tr><th scope="row">Manchester City</th><td>38</td><td>21</td><td>8</td><td>9</td><td>72</td><td>44</td><td>+28</td><td>71</td><td>W W D W W</td></tr>
            <tr><th scope="row">Chelsea</th><td>38</td><td>20</td><td>9</td><td>9</td><td>64</td><td>43</td><td>+21</td><td>69</td><td>W W L W W</td></tr>
            <tr><th scope="row">Newcastle United</th><td>38</td><td>20</td><td>6</td><td>12</td><td>68</td><td>47</td><td>+21</td><td>66</td><td>W D W L L</td></tr>
            <tr><th scope="row">Aston Villa</th><td>38</td><td>19</td><td>9</td><td>10</td><td>58</td><td>51</td><td>+7</td><td>66</td><td>L W W W L</td></tr>
            <tr><th scope="row">Nottingham Forest</th><td>38</td><td>19</td><td>8</td><td>11</td><td>58</td><td>46</td><td>+12</td><td>65</td><td>L D D W L</td></tr>
            <tr><th scope="row">Brighton &amp; Hove Albion</th><td>38</td><td>16</td><td>13</td><td>9</td><td>66</td><td>59</td><td>+7</td><td>61</td><td>W D W W W</td></tr>
            <tr><th scope="row">Bournemouth</th><td>38</td><td>15</td><td>11</td><td>12</td><td>58</td><td>46</td><td>+12</td><td>56</td><td>D W L L W</td></tr>
            <tr><th scope="row">Brentford</th><td>38</td><td>16</td><td>8</td><td>14</td><td>66</td><td>57</td><td>+9</td><td>56</td><td>W W W L D</td></tr>
            <tr><th scope="row">Fulham</th><td>38</td><td>15</td><td>9</td><td>14</td><td>54</td><td>54</td><td>0</td><td>54</td><td>W L L W L</td></tr>
            <tr><th scope="row">Crystal Palace</th><td>38</td><td>13</td><td>14</td><td>11</td><td>51</td><td>51</td><td>0</td><td>53</td><td>D D W W D</td></tr>
            <tr><th scope="row">Everton</th><td>38</td><td>11</td><td>15</td><td>12</td><td>42</td><td>44</td><td>-2</td><td>48</td><td>L D W W W</td></tr>
            <tr><th scope="row">West Ham United</th><td>38</td><td>11</td><td>10</td><td>17</td><td>46</td><td>62</td><td>-16</td><td>43</td><td>L D W L W</td></tr>
            <tr><th scope="row">Manchester United</th><td>38</td><td>11</td><td>9</td><td>18</td><td>44</td><td>54</td><td>-10</td><td>42</td><td>D L L L W</td></tr>
            <tr><th scope="row">Wolverhampton Wanderers</th><td>38</td><td>12</td><td>6</td><td>20</td><td>54</td><td>69</td><td>-15</td><td>42</td><td>W L L L D</td></tr>
            <tr><th scope="row">Tottenham Hotspur</th><td>38</td><td>11</td><td>5</td><td>22</td><td>64</td><td>65</td><td>-1</td><td>38</td><td>L D L L L</td></tr>
            <tr><th scope="row">Leicester City</th><td>38</td><td>6</td><td>7</td><td>25</td><td>33</td><td>80</td><td>-47</td><td>25</td><td>L W D W L</td></tr>
            <tr><th scope="row">Ipswich Town</th><td>38</td><td>4</td><td>10</td><td>24</td><td>36</td><td>82</td><td>-46</td><td>22</td><td>L D L L L</td></tr>
            <tr><th scope="row">Southampton</th><td>38</td><td>2</td><td>6</td><td>30</td><td>26</td><td>86</td><td>-60</td><td>12</td><td>L L D L L</td></tr>
          </tbody>
        </table>
      </div>
{{< /demo >}}
## Remote Data Table
Fetches data from an API () and renders it.

{{< demo >}}
<div class="table-container" style="height: 400px; overflow-y: auto; border: 1px solid var(--ds-sys-color-border);">
  <table id="remote-table" class="table table--sticky">
    <thead>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th style="text-align: right;">Price</th>
      </tr>
    </thead>
    <tbody id="remote-body">
      <tr><td colspan="3" style="text-align:center; padding: 2rem;">Loading data...</td></tr>
    </tbody>
  </table>
</div>

<script>
  // Simple fetch logic for demo purposes
  fetch('https://dummyjson.com/products?limit=25')
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById('remote-body');
      tbody.innerHTML = data.products.map(p => `
        <tr>
          <td>
            <div >
              <img src="${p.thumbnail}" >
              <span style="font-weight: 500;">${p.title}</span>
            </div>
          </td>
          <td><span class="badge badge--soft badge--primary">${p.category}</span></td>
          <td >$${p.price}</td>
        </tr>
      `).join('');
    });
</script>
{{< /demo >}}
